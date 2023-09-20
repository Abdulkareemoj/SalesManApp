import { BrowserRouter as Router, Link } from "react-router-dom";

export function MainNav() {
  return (
    <Router>
      <nav>
        <ul className="flex items-center space-x-4 lg:space-x-6">
          <li className="text-sm font-medium transition-colors hover:text-primary">
            <Link to="/">Overview</Link>
          </li>
          <li className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <Link to="/">Customers</Link>
          </li>
          <li className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <Link to="/">Products</Link>
          </li>
          <li className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <Link to="/">Settings</Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
}
