import useFetch from "../hooks/useFetch";

function PostViwer({exampleId}){
  const {data : albums,isLoading,eror} = useFetch(`https://jsonplaceholder.typicode.com/albums/${exampleId}`)

  if (isLoading) return <p>sedang mengambil data...</p>

  if (eror) return <p>{eror.message}</p>

  if (!albums) return <p>data tidak di temukan</p> 

  return (
    <div>
        <h3>{albums.id}</h3>
        <p>{albums.title}</p>
    </div>
  )
}
export default PostViwer

