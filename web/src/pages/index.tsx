interface HomeProps{
  count: number;
}

export default function Home(props: HomeProps) {
  return (
    <h1 className="text-violet-500 font-bold text-xl">Contagem: {props.count}</h1>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3100/pools/count')
  const data = await response.json()

  console.log(data)
  return{
    props: {
      count: data.count,
    }
  }
}