import * as React from 'react';
import {
  Popover,
  Button,
  PopoverInteractionKind,
  Dialog
} from '@blueprintjs/core';
import RecentlySubmittedHits from '../RequesterWorkHistory/RecentlySubmittedHits ';
import RequesterWorkHistory from '../RequesterWorkHistory/RequesterWorkHistory';

interface Props {
  readonly requesterId: string;
}

interface State {
  readonly modalOpen: boolean;
}

class KnownRequesterButton extends React.PureComponent<Props, State> {
  public readonly state: State = { modalOpen: false };

  private toggleModal = () =>
    this.setState((prevState: State): Partial<State> => ({
      modalOpen: !prevState.modalOpen
    }));

  public render() {
    return (
      <React.Fragment>
        <Popover interactionKind={PopoverInteractionKind.HOVER}>
          <Button
            intent={0}
            className="pt-button pt-small pt-minimal"
            iconName="pt-icon-search-template"
            onClick={this.toggleModal}
          >
            View requester work history
          </Button>
          <RecentlySubmittedHits requesterId={this.props.requesterId} />
        </Popover>
        <Dialog
          isOpen={this.state.modalOpen}
          onClose={this.toggleModal}
          title="Requester Work History"
          isCloseButtonShown={true}
        >
          <RequesterWorkHistory requesterId={this.props.requesterId} />
        </Dialog>
      </React.Fragment>
    );
  }
}

export default KnownRequesterButton;
