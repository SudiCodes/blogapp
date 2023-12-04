import Card from "react-bootstrap/Card";
import moment from "moment";

const BlogCard = (props) => {
  const formattedDate = moment(props.created_at).format("Do MMM, YYYY");
  return (
    <Card className="card text-white bg-transparent m-2 shadow-lg">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {`By ${props.written_by} on ${formattedDate}`}
        </Card.Subtitle>
        <Card.Text className="bg-info bg-opacity-75 border border-success p-2 mb-2 rounded ">
          {props.content}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#"></Card.Link>
      </Card.Body>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </Card>
  );
};

export default BlogCard;
