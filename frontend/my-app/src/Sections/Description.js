import ReactMarkdown from 'react-markdown'
function Description({description}){
  return (<>
    <ReactMarkdown>{description}</ReactMarkdown>
  </>)
}
export default Description