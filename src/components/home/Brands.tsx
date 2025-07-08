
const brands = [
    {
        image: '/img/Brands/Apple-Logo.webp',
        alt: 'Apple'
    },
    {
        image: '/img/Brands/honor-logo.png',
        alt: 'Honor'
    },
    {
        image: '/img/Brands/huawei-logo.png',
        alt: 'Huawei'
    },
    {
        image: '/img/Brands/realme-logo.webp',
        alt: 'Realme'
    },
    {
        image: '/img/Brands/Samsung_Logo.webp',
        alt: 'Samsung'
    },
    {
        image: '/img/Brands/xiaomi-logo.webp',
        alt: 'Xiaomi'
    },
]




export const Brands = () => {
    return (
        <div className="flex flex-col items-center gap-3 pt-16 pb-12">
            <h2 className="font-bold text-2xl">Marcas que disponemos </h2>
            <p className="w-2/3 text-center text-sm md:text-base">Tenemos lo mas moderno en tecnologia y los ultimos modelos de celulares disponibles.</p>

            <div className="grid grid-cols-3 gap-6 mt-8 items-center md:grid-cols-6">
                {brands.map((brand, index) => (
                    <div key={index}>
                        <img
                            src={brand.image}
                            alt={brand.alt}
                            className="w-20 h-20 object-contain"
                        />
                    </div>

                ))}
            </div>
        </div>
    )
}
