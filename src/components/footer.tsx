import gitHub from "../assets/GitHub-Mark-32px.png"

export default function footer() {
  return (
    <footer id="footer">
      <p>
        <a href="https://www.mmkepler.com" rel="noopener noreferrer" target="_blank">Created by Melissa Kepler</a>
      </p>
      <p>
        <a href="https://github.com/mmkepler/open-weather-version4" rel="noopener noreferrer" target="_blank">
          <img src={gitHub}/>
        </a>
      </p>
    </footer>
  )
}
