import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const status = searchParams.get('status')

    let whereClause: any = {}
    
    if (userId) {
      whereClause.userId = userId
    }
    
    if (status) {
      whereClause.status = status
    }

    const orders = await db.order.findMany({
      where: whereClause,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        orderItems: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                image: true
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json({
      success: true,
      data: orders
    })
  } catch (error) {
    console.error('Error fetching orders:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, items, address, phone } = body

    if (!userId || !items || items.length === 0) {
      return NextResponse.json(
        { success: false, error: 'UserId and items are required' },
        { status: 400 }
      )
    }

    // Calculate total and validate stock
    let total = 0
    for (const item of items) {
      const product = await db.product.findUnique({
        where: { id: item.productId }
      })
      
      if (!product) {
        return NextResponse.json(
          { success: false, error: `Product with id ${item.productId} not found` },
          { status: 400 }
        )
      }
      
      if (product.stock < item.quantity) {
        return NextResponse.json(
          { success: false, error: `Insufficient stock for product ${product.name}` },
          { status: 400 }
        )
      }
      
      total += product.price * item.quantity
    }

    // Create order
    const order = await db.order.create({
      data: {
        userId,
        total,
        address,
        phone,
        status: 'PENDING',
        orderItems: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price
          }))
        }
      },
      include: {
        orderItems: {
          include: {
            product: true
          }
        }
      }
    })

    // Update stock
    for (const item of items) {
      await db.product.update({
        where: { id: item.productId },
        data: {
          stock: {
            decrement: item.quantity
          }
        }
      })
    }

    return NextResponse.json({
      success: true,
      data: order
    })
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    )
  }
}