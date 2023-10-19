import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetails = (props) => {
const { id } = useParams()
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
            <span className="card-title">Project Title - {id}</span>
            <p>Ullamco consectetur reprehenderit proident incididunt quis qui pariatur culpa nisi. Commodo nostrud culpa in proident mollit aliqua qui ullamco velit exercitation. In qui sit ex Lorem ad.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Soft</div>
            <div>11th November, 10:40am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
