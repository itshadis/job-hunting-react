import { Button, Typography } from "antd";

const { Title } = Typography;

function LandingPage() {
  return (
    <div>
      <Title level={1}>Landing Page</Title>
      <Button type="primary">Login</Button>
    </div>
  )
}

export default LandingPage;