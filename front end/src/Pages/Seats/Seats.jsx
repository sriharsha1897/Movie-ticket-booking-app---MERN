import ArmChairs from '../../components/ArmChiars/ArmChiars';
import BackRow from '../../components/BackRow/BackRow';
import FirstRow from '../../components/FirstRow/FirstRow';
import Screen from '../../components/Screen/Screen';
import NavBar from '../../components/Navbar/Navbar';

const Seats = () => {
  return (
    <>
      <NavBar />
      <Screen />
      <FirstRow />
      <ArmChairs />
      <BackRow />
    </>
  );
};

export default Seats;
