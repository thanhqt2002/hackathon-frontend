import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

const Katexline = ({taskcontent}) => {
    return (
        <div>
            {taskcontent.split("\n\n").map((linecontent,key)=>(linecontent.trim()&&(<ReactMarkdown className="Display-2" key={key}
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[[rehypeKatex , {fleqn:false , displayMode:true ,strict:false,trust: (context) => ['http', 'https', '_relative'].includes(context.protocol)}]]}
                    children={linecontent}
                />
           )))}
        </div>
    )
}

export default Katexline
