import ProtectedRoute from "@/components/Protected/ProtectedRoute";

const About = () => {
  return (
    <ProtectedRoute>
      <div>Hellooo</div>
    </ProtectedRoute>
  );
};

export default About;
