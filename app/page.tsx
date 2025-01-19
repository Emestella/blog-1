import Image from 'next/image'
import { BlogPosts } from 'components/posts'

export default function Page() {
  return (
    <section>
      <div className="flex items-center mb-8">
        <Image
          src="/Butterfly.png"
          alt="profile image"
          width={100}
          height={100}
          className="rounded-full mr-4"
        />
        <h1 className="text-2xl font-semibold tracking-tighter">
          Bonjour.
        </h1>
      </div>
      <p className="mb-4">
        Vous &ecirc;tes actuellement sur ma page personnelle. Ici, j'y &eacute;cris des articles. Genre, tout plein d'articles. 
        Vous aimerez s&ucirc;rement y jeter un &oelig;il. Ou deux. Non, pas deux, ne le faites pas, sinon vous pourrez plus rien lire.
      </p>
      <p className="mb-4">
        Profitez-bien du contenu ! N'oubliez pas de faire des pauses r&eacute;guli&egrave;res et de boire de l'eau.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
