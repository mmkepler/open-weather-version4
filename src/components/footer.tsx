import gitHub from "../assets/GitHub-Mark-32px.png"

export default function footer() {
  return (
    <footer className="flex flex-row justify-evenly items-center h-[60px] bg-(--color-3) w-full border-t-2 border-(--color-1) shadow-[0_-1px_4px_1px_rgba(0,0,0,.2)]">
      <p>
        <a href="https://www.mmkepler.com" target="_blank" rel="noopener noreferrer" className="text-black no-underline">created by Melissa Kepler</a>
      </p>
      <p>
        <a href="https://github.com/mmkepler/open-weather-version4">
          <img src={gitHub}></img>
        </a>
      </p>
      
    </footer>
  )
}
