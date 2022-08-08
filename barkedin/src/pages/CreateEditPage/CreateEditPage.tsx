import { useParams } from "react-router-dom";
import CreateEditForm from "../../components/CreateEditForm/CreateEditForm";

const CreateEditPage = (): JSX.Element => {
  const { id } = useParams();
  return <CreateEditForm id={id} />;
};

export default CreateEditPage;
