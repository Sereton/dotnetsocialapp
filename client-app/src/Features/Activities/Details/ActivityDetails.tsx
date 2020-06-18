import React, { useContext, useEffect } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import ActivityStore from "../../../App/stores/activityStore";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router-dom";
import { LoadingComponent } from "../../../App/Layout/LoadingComponent";

interface DetailParams {
  id: string;
}

const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history,
}) => {
  const activityStore = useContext(ActivityStore);
  const {
    selectedActivity,
    showEdit,
    setSelectedActivity,
    loadActivity,
    loadingInitial,
  } = activityStore;

  useEffect(() => {
    loadActivity(match.params.id);
  }, [loadActivity]);

  if (loadingInitial || !selectedActivity)
    return <LoadingComponent content="Loading Activity" />;
  return (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${selectedActivity!.category}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{selectedActivity!.title}</Card.Header>
        <Card.Meta>
          <span className="date">{selectedActivity!.date}</span>
        </Card.Meta>
        <Card.Description>{selectedActivity!.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            basic
            onClick={() => showEdit(true)}
            content="Edit"
            color="brown"
          />
          <Button
            basic
            onClick={() => history.push("/activities")}
            content="Cancel"
            color="grey"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default observer(ActivityDetails);
