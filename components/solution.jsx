import './solution.css'

export const SolutionBox = ({ children }) => (
  <div className="solutionBox">
    <div className="solutionHeader">
      <span className="solutionIcon">✅</span>
      <strong>Solution</strong>
    </div>
    <div className="solutionContent">
      {children}
    </div>
  </div>
);