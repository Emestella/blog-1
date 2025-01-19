import Image from 'next/image'

export default function NotFound() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        404 - Page Not Found
      </h1>
      <p className="mb-4">Ceci n'est pas la page que vous cherchez.</p>
      <Image
                src="/404.jpg"
                alt="Obi-Wan should be here !"
                width={620}
                height={270}
              />
    </section>
  )
}
