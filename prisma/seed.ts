import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create categories
  const electronicsCategory = await prisma.category.create({
    data: {
      name: 'Elektronik',
      description: 'Produk elektronik dan gadget'
    }
  })

  const fashionCategory = await prisma.category.create({
    data: {
      name: 'Fashion',
      description: 'Pakaian dan aksesoris'
    }
  })

  const homeCategory = await prisma.category.create({
    data: {
      name: 'Rumah Tangga',
      description: 'Peralatan rumah tangga'
    }
  })

  const sportsCategory = await prisma.category.create({
    data: {
      name: 'Olahraga',
      description: 'Peralatan olahraga dan outdoor'
    }
  })

  // Create products
  await prisma.product.createMany({
    data: [
      {
        name: 'Smartphone Premium',
        description: 'Smartphone dengan layar AMOLED 6.5 inci, kamera 108MP, dan baterai 5000mAh',
        price: 8999000,
        stock: 50,
        categoryId: electronicsCategory.id,
        image: '/api/placeholder/300/300'
      },
      {
        name: 'Laptop Gaming',
        description: 'Laptop gaming dengan prosesor Intel Core i7, RAM 16GB, dan GPU RTX 3060',
        price: 15999000,
        stock: 25,
        categoryId: electronicsCategory.id,
        image: '/api/placeholder/300/300'
      },
      {
        name: 'Headphone Wireless',
        description: 'Headphone bluetooth dengan noise cancellation dan baterai 30 jam',
        price: 1299000,
        stock: 100,
        categoryId: electronicsCategory.id,
        image: '/api/placeholder/300/300'
      },
      {
        name: 'Kemeja Formal',
        description: 'Kemeja formal berkualitas tinggi dengan bahan katun premium',
        price: 299000,
        stock: 75,
        categoryId: fashionCategory.id,
        image: '/api/placeholder/300/300'
      },
      {
        name: 'Sepatu Sneakers',
        description: 'Sepatu sneakers nyaman dengan desain modern dan bahan berkualitas',
        price: 599000,
        stock: 60,
        categoryId: fashionCategory.id,
        image: '/api/placeholder/300/300'
      },
      {
        name: 'Tas Ransel',
        description: 'Tas ransel multifungsi dengan banyak kompartemen dan bahan tahan air',
        price: 399000,
        stock: 80,
        categoryId: fashionCategory.id,
        image: '/api/placeholder/300/300'
      },
      {
        name: 'Set Peralatan Makan',
        description: 'Set peralatan makan stainless steel untuk 6 orang',
        price: 499000,
        stock: 40,
        categoryId: homeCategory.id,
        image: '/api/placeholder/300/300'
      },
      {
        name: 'Vacuum Cleaner',
        description: 'Vacuum cleaner portable dengan daya hisap kuat dan filter HEPA',
        price: 899000,
        stock: 30,
        categoryId: homeCategory.id,
        image: '/api/placeholder/300/300'
      },
      {
        name: 'Air Purifier',
        description: 'Air purifier dengan filter 3-layer untuk udara lebih bersih',
        price: 1299000,
        stock: 35,
        categoryId: homeCategory.id,
        image: '/api/placeholder/300/300'
      },
      {
        name: 'Matras Yoga',
        description: 'Matras yoga non-slip dengan ketebalan 6mm dan bahan eco-friendly',
        price: 199000,
        stock: 90,
        categoryId: sportsCategory.id,
        image: '/api/placeholder/300/300'
      },
      {
        name: 'Dumbbell Set',
        description: 'Set dumbbell adjustable dari 2.5kg hingga 24kg',
        price: 799000,
        stock: 45,
        categoryId: sportsCategory.id,
        image: '/api/placeholder/300/300'
      },
      {
        name: 'Treadmill Elektrik',
        description: 'Treadmill elektrik dengan monitor heart rate dan incline adjustment',
        price: 4999000,
        stock: 15,
        categoryId: sportsCategory.id,
        image: '/api/placeholder/300/300'
      }
    ]
  })

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })