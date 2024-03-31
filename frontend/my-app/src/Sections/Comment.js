import ReactMarkdown from 'react-markdown'
function Comment({comment}){
  return (<>
    <ReactMarkdown>{comment}</ReactMarkdown>
  </>)
}
export default Comment