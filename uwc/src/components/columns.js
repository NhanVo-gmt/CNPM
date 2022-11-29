import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faComment,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
export const COLUMNS = [
  {
    Header: "WORKER",
    accessor: "name"
  },
  {
    Header: "ROLE",
    accessor: "role"
  },
  {
    Header: "TASK OVERVIEW",
    accessor: "overview"
  },
  {
    Header: "STATUS",
    accessor: "status"
  },
  {
    Header: "",
    id: "icon",
    Cell: (props) => (
      <span className="far fa-circle fa-1x" style={{ vertical_align: "top" }}>
        <span>
          <FontAwesomeIcon icon={faPencil} />
        </span>
        <span>
          <FontAwesomeIcon icon={faTrash} />
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} />
        </span>
      </span>
    )
  }
];
