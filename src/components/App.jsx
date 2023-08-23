import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {' '}
      <Sidebar />
      <Main />
    </div>
  );
};
