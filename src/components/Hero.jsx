import {logo} from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="w-full mb-10 pt-4 flex justify-between items-center">
            <img className="w-28 object-contain" src={logo} alt="Logo" />

            <button className='black_btn' type="button" onClick={() => {
                window.open('https://nchrisdesigner.netlify.app/')
            }}>Website</button>
        </nav>

        <h1 className="head_text">Summarize Articles <br className='md:hidden' />
        <span className='orange_gradient'>OpenAi GPT-4</span></h1>

        <h2 className='desc'>
            Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.
        </h2>
    </header>
  )
}

export default Hero