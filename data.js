
const data = [
    {
        name: 'HANDMADE EMERALD CUT EMERALD RING',
        price: 550,
        oPrice: 725,
        image: '/img/content/product1.png',
        tag: 'sale',
    },

    {
        name: 'beautiful Valentine And Engagement',
        price: 550.,
        oPrice: 725,
        image: '/img/content/product2.png',
    },
    {
        name: 'Emerald Cut Emerald Ring',
        price: 550,
        oPrice: 725,
        image: '/img/content/product3.png',
        tag: 'new',
    },
    {
        name: 'Diamond Necklaces and Pendants',
        price: 550,
        oPrice: 725,
        image: '/img/content/product4.png',
    },
    {
        name: 'Emerald Diamond Solitaire',
        price: 550,
        oPrice: 725,
        image: '/img/content/product5.png',
    },
    {
        name: 'Diamond Necklaces and Pendants',
        price: 550,
        oPrice: 725,
        image: '/img/content/product6.png',
    },
    {
        name: 'Gold Pearl Bracelet',
        price: 550,
        oPrice: 725,
        image: '/img/content/product7.png',
        tag: 'top',
    },
    {
        name: 'beautiful Valentine And Engagement',
        price: 550,
        oPrice: 725,
        image: '/img/content/product8.png',
    }

];

const slideData= [
    {
        image:'/img/content/slid-1.png',
        name: 'Engagement Rings',
        buyNow : 'BuyNow',
        article: 'The hardest part is over – you’ve found the love of  your life. Now is the time to find the perfect diamond  engagement ring and plan a beautiful proposal.',
    },
    {
        image:'/img/content/slid-2.png',
        name: 'Precious Metals',
        buyNow : 'BuyNow',
        article: 'There’s no gift quite like diamond jewelry. Whether you’re looking for a diamond ring, bracelet,  earrings or necklace, we’ll give you tips.',
    },
    {
        image:'/img/content/slid-3.png',
        name: 'Handmade jewelry',
        buyNow : 'BuyNow',
        article: 'Congratulations on your engagement. As you begin to plan the many details of your wedding day, don’t forget the rings!',
    },
]

const gridData = [
    {
        name:'handmade Cut Emerald Ring',
        slug: 'handmade-cut-emerald',
        image: '/img/content/product1.png',
        tag: 'sale',
        images:[
            '/img/content/product1.png',
            '/img/content/product2.png',
            '/img/content/product3.png',
            '/img/content/product4.png',
            '/img/content/product5.png',
        ],
        price: 1550,
        oPrice: 1725,
        isAvailable:true,
        description : 'Suspendisse at placerat turpis. Duis luctus erat vel magna pharetra aliquet. Maecenas tincidunt feugiat ultricies. Phasellus et dui risus. Vestibulum adipiscing, eros quis lobortis dictum. Etiam mollis volutpat odio, id euismod justo gravida a. Aliquam erat volutpat. Phasellus faucibus venenatis lorem, vitae commodo elit pretium et. Duis rhoncus lobortis congue. Vestibulum et purus dui, vel porta lectus. Sed vulputate pulvinar adipiscing. Here are some verb phrase examples where the verb phrase is the predicate of a sentence. In this case, the verb phrase consists of the main verb plus any auxiliary, or helping, verbs. Nulla nec velit. Mauris pulvinar erat non massa. Suspendisse tortor turpis, porta nec, tempus vitae, iaculis semper, pede.',
        summary: 'Duis mollis, augue rutrum viverra pellentesque, odio lacus feugiat neque, eget pulvinar enim dui vitae enim. Suspendisse adipiscing sollicitudin scelerisque.  Vivamus mattis lacinia nulla vel adipiscing. Phasellus et lacus at eros scelerisque auctor eu eu nisl.'
    },
    {
        name:'ladies engagement golden ring',
        slug:'ladies-engagement-golden-ring',
        image: '/img/content/product33.jpg',
        tag: 'sale',
        images:[
            '/img/content/product33.jpg',
            '/img/content/product34.jpeg',
            '/img/content/product35.jpg',
            '/img/content/product36.jpg',
        ],
        price: 1550,
        oPrice: 1725,
        isAvailable:true,
        description : 'Suspendisse at placerat turpis. Duis luctus erat vel magna pharetra aliquet. Maecenas tincidunt feugiat ultricies. Phasellus et dui risus. Vestibulum adipiscing, eros quis lobortis dictum. Etiam mollis volutpat odio, id euismod justo gravida a. Aliquam erat volutpat. Phasellus faucibus venenatis lorem, vitae commodo elit pretium et. Duis rhoncus lobortis congue. Vestibulum et purus dui, vel porta lectus. Sed vulputate pulvinar adipiscing. Here are some verb phrase examples where the verb phrase is the predicate of a sentence. In this case, the verb phrase consists of the main verb plus any auxiliary, or helping, verbs. Nulla nec velit. Mauris pulvinar erat non massa. Suspendisse tortor turpis, porta nec, tempus vitae, iaculis semper, pede.',
        summary: 'Duis mollis, augue rutrum viverra pellentesque, odio lacus feugiat neque, eget pulvinar enim dui vitae enim. Suspendisse adipiscing sollicitudin scelerisque.  Vivamus mattis lacinia nulla vel adipiscing. Phasellus et lacus at eros scelerisque auctor eu eu nisl.'
    },
    {
        name:'handmade Emerald Cut<br> Emerald Ring',
        slug: 'handmade-emer',
        image: '/img/content/product1.png',
        images: ['/img/content/product1.png'],
        tag: 'sale',
        price: 550,
        oPrice: 725,
    },
    {
        name:'beautiful Valentine And Engagement',
        image: '/img/content/product2.png',
        price: 550,
    },
    {
        name:'Emerald Cut Emerald Ring',
        image: '/img/content/product3.png',
        tag: 'new',
        price: 550,
    },
    {
        name:'Diamond Necklaces and Pendants',
        image: '/img/content/product4.png',
        price: 550,
    },
    {
        name:'Emerald Diamond Solitaire',
        image: '/img/content/product5.png',
        price: 550,
    },
    {
        name:'Diamond Necklaces and Pendants',
        image: '/img/content/product6.png',
        price: 550,
    },
    {
        name:'Gold Pearl Bracelet',
        image: '/img/content/product7.png',
        tag: 'top',
        price: 550,
    },
    {
        name:'beautiful Valentine And Engagement',
        image: '/img/content/product8.png',
        price: 550,
    },
    {
        name:'Golden Charm Cluster Necklace',
        image: '/img/content/product9.png',
        price: 1750,
    },
    {
        name:'HandMade Pearl Necklace',
        image: '/img/content/product10.png',
        price: 2300,
    },
]

const user = {
    name: 'Victor',
    addImage: '/dashboard/images/victor.jpg',
    email: 'chifunwatu@gmail.com'
}

module.exports = {
    data, slideData, gridData, user,
}
