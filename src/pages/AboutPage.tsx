export const AboutPage = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-center text-4xl font-semibold tracking-tight mb-5">
        Nuestra empresa
      </h1>

      <img
				src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				alt='Imagen de fondo'
				className='h-[500px] w-full object-cover'
			/>


      <div className="flex flex-col gap-4 tracking-tigher leading-7 text-sm font-medium text-slate-800">
       <p>
					PhoneThunder es una tienda en línea que se dedica a la
					venta de celulares, fundada en 2025. Nuestro objetivo es
					ofrecer a nuestros clientes la mejor calidad y precio en
					celulares. Contamos con un equipo de profesionales que se
					encargan de seleccionar los mejores productos para ti.
				</p>

				<p>
					En PhoneThunder podrás encontrar una amplia variedad de
					celulares de las mejores marcas. Además, contamos con
					promociones y descuentos exclusivos para que puedas comprar
					tu celular al mejor precio.
				</p>

				<h2 className='text-3xl font-semibold tracking-tighh mt-8 mb-4'>
					¡No esperes más y compra tu celular en PhoneThunder!
				</h2>

				<p>
					Para más información, no dudes en ponerte en contacto con
					nosotros, a través de nuestro correo electrónico:
					<a href='mailto:correo@phonethunder.com'>
						correo@phonethunder.com
					</a>{' '}
					o llamado al <a href='tel:333333333'>3333333333</a>
				</p>
      </div>
    </div>
  )
}
