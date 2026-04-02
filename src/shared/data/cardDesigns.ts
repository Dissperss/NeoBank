import designBlack from '@/shared/assets/images/cardDesign1.png'
import designSpace from '@/shared/assets/images/cardDesign2.png'
import designNeon from '@/shared/assets/images/cardDesign3.png'
import designDrops from '@/shared/assets/images/cardDesign4.png'

export type CardDesign = {
    id: number
    name: string
    imageUrl: string
}

export const cardDesigns: CardDesign[] = [
    {
        id: 1,
        name: 'Classic Black',
        imageUrl: designBlack,
    },
    {
        id: 2,
        name: 'Space Galaxy',
        imageUrl: designSpace,
    },
    {
        id: 3,
        name: 'Neon Punk',
        imageUrl: designNeon,
    },
    {
        id: 4,
        name: 'Raindrops',
        imageUrl: designDrops,
    },
]
