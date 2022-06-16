import { useRouter } from 'next/router'
import Link from 'next/link';

const Post = () => {
  const router = useRouter();
  return (
    <>
      <div>Id do post atual {router.query.id}</div>
      <Link href="/"><a>Página inicial</a></Link>
    </>
  )

}

export default Post
