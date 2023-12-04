import React, { useState, useEffect } from "react";
import { APIAxiosInstance } from "./AxiosInstance";
import BlogCard from "./Cards/BlogCard";
import blogwallBg from "./Assests/blogwall_bg.jpg";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Container,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
} from "reactstrap";
import mountainBg from "./Assests/mountain-bg-2.jpg";
import mountainBg2 from "./Assests/mountain-bg.jpg";
import roadBg from "./Assests/road-bg.jpg";

const BlogWall = () => {
  const myStyle = {
    backgroundImage: `url(${blogwallBg})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const [blogdata, setBlogdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await APIAxiosInstance.get("blogapp/blogs/");
        setBlogdata(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      {blogdata.length ? (
        <Container fluid>
          <Row>
            <Col md={6}>
              <Card inverse>
                <CardImg
                  alt="Card image cap"
                  src={mountainBg}
                  style={{
                    height: "100vh",
                  }}
                  width="100%"
                />
                <CardImgOverlay>
                  <BlogCard
                    content={blogdata[0].content}
                    title={blogdata[0].title}
                    written_by={blogdata[0].uploaded_by}
                    created_at={blogdata[0].created_at}
                  />
                </CardImgOverlay>
              </Card>
              {/* <Card>
                <CardBody>
                  <BlogCard
                    content={blogdata[0].content}
                    title={blogdata[0].title}
                    written_by={blogdata[0].uploaded_by}
                    created_at={blogdata[0].created_at}
                  />
                </CardBody>
              </Card> */}
            </Col>
            <Col md={6}>
              <Row className="mb-3">
                <Card inverse>
                  <CardImg
                    alt="Card image cap"
                    src={roadBg}
                    style={{
                      height: "49vh",
                    }}
                    width="100%"
                  />
                  <CardImgOverlay>
                    <BlogCard
                      content={blogdata[1].content}
                      title={blogdata[1].title}
                      written_by={blogdata[1].uploaded_by}
                      created_at={blogdata[1].created_at}
                    />
                  </CardImgOverlay>
                </Card>
              </Row>
              <Row>
                <Card inverse>
                  <CardImg
                    alt="Card image cap"
                    src={mountainBg2}
                    style={{
                      height: "49vh",
                    }}
                    width="100%"
                  />
                  <CardImgOverlay>
                    <BlogCard
                      content={blogdata[2].content}
                      title={blogdata[2].title}
                      written_by={blogdata[2].uploaded_by}
                      created_at={blogdata[2].created_at}
                    />
                  </CardImgOverlay>
                </Card>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <React.Fragment>No data</React.Fragment>
      )}
    </React.Fragment>
  );
};

export default BlogWall;
