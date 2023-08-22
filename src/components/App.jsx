import Button from './Button/Button';
import Sidebar from './Sidebar/Sidebar';
import Card from './Card/Card';
import Paper from './Paper/Paper';
import TutorForm from './TutorForm/TutorForm';
import Tutors from './Tutors/Tutors';
import Tutor from './Tutor/Tutor';
/* import CitiesList from './CitiesList'; */

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {' '}
      <Tutor />
      <Tutors />
      <TutorForm />
      <Tutor />
      <Paper />
      <Card />
      <Sidebar />
      <Button />
    </div>
  );
};
