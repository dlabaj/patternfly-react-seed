import React, { Component } from 'react';
import { BackgroundImageSrc, Dropdown, DropdownItem, DropdownToggle } from '@patternfly/react-core';
import '@app/app.css';
import xs from '@assets/images/pfbg_576.jpg';
import xs2x from '@assets/images/pfbg_576@2x.jpg';
import sm from '@assets/images/pfbg_768.jpg';
import sm2x from '@assets/images/pfbg_768@2x.jpg';
import lg from '@assets/images/pfbg_1200.jpg';
import filter from '@assets/images/background-filter.svg';

const images = {
  [BackgroundImageSrc.xs]: xs,
  [BackgroundImageSrc.xs2x]: xs2x,
  [BackgroundImageSrc.sm]: sm,
  [BackgroundImageSrc.sm2x]: sm2x,
  [BackgroundImageSrc.lg]: lg,
  [BackgroundImageSrc.filter]: `${filter}#image_overlay`
};

export default class App extends Component {
  state = {
    isOpen: false,
    isOpen2: false
  };

  onToggle = (isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };

  onSelect = (event: any) => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  onToggle2 = (isOpen2: boolean) => {
    this.setState({
      isOpen2
    });
  };

  onSelect2 = (event: any) => {
    this.setState({
      isOpen2: !this.state.isOpen2
    });
  };

  render() {
    const { isOpen, isOpen2 } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled>
        Disabled Action
      </DropdownItem>
    ];
    const dropdownItems2 = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action">
        Action 2
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link 2
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled>
        Disabled Action 2
      </DropdownItem>
    ];
    return (
      <div className="app-container">
      <Dropdown
        onSelect={this.onSelect}
        toggle={<DropdownToggle onToggle={this.onToggle}>Dropdown</DropdownToggle>}
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
      <Dropdown
        onSelect={this.onSelect2}
        toggle={<DropdownToggle onToggle={this.onToggle2}>Dropdown 2</DropdownToggle>}
        isOpen={isOpen2}
        dropdownItems={dropdownItems2}
      />
      </div>);
  }
  // public state = {
  //   isShowing: true
  // };
  // public render() {
  //   const { isShowing } = this.state;
  //   return (
  //     <React.Fragment>
  //       <BackgroundImage src={images} />
  //       <div className="app-container">
  //         {isShowing && (
  //           <div className="notification-container">
  //             <Alert
  //               variant="success"
  //               title="Setup Complete"
  //               action={<AlertActionCloseButton onClose={this.dismissNotification} />}
  //             >
  //               You have successfully launched your patternfly starter project.
  //             </Alert>
  //           </div>
  //         )}
  //       </div>
  //     </React.Fragment>
  //   );
  // }
  // private dismissNotification = () => {
  //   this.setState({ isShowing: false });
  // };
}
