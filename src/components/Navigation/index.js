export default function Nav(props) {
  const {setPage} = props
  return (
    <nav>
      <li onClick={() => setPage("about")}>about</li>
      <li onClick={() => setPage("projects")}>Projects</li>
      <li onClick={() => setPage("contact")}>Contact</li>
    </nav>
  );
}
