import { Button } from '../components';

const weights = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
];

const ButtonContainer = () => {
  return (
    <div>
      <div
        style={{
          padding: '16px',
        }}
      >
        <h2>Button Container</h2>
        <div>
          <div>
            <h3>Default</h3>
            <div>
              <Button type="contained">Default</Button>
            </div>
          </div>
          <div>
            <h3>Primary</h3>
            <div>
              <Button
                type="contained"
                color="primary"
                onClick={() => alert('primary')}
              >
                Button
              </Button>

              {weights.map((colorWeight, idx) => (
                <Button
                  key={colorWeight + '-' + idx}
                  type="contained"
                  color="primary"
                  onClick={() => alert('primary' + colorWeight)}
                  colorWeight={colorWeight}
                >
                  Button
                </Button>
              ))}

              <Button
                type="contained"
                color="primary"
                disabled={true}
                onClick={() => alert('primary')}
              >
                Button Disabled
              </Button>
            </div>
          </div>
          <div>
            <h3>Secondary</h3>
            <div>
              <Button
                type="contained"
                color="secondary"
                onClick={() => alert('secondary')}
              >
                Button
              </Button>
              {weights.map((colorWeight, idx) => (
                <Button
                  key={colorWeight + '-' + idx}
                  type="contained"
                  color="secondary"
                  onClick={() => alert('secondary' + colorWeight)}
                  colorWeight={colorWeight}
                >
                  Button
                </Button>
              ))}
              <Button
                type="contained"
                color="secondary"
                disabled={true}
                onClick={() => alert('secondary')}
              >
                Button Disabled
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: '16px',
        }}
      >
        <h2>Button Outlined</h2>
        <div>
          <Button type="outlined" onClick={() => alert('outlined')}>
            Default
          </Button>
          <Button
            type="outlined"
            onClick={() => alert('outlined')}
            color="primary"
          >
            Primary
          </Button>
          <Button
            type="outlined"
            onClick={() => alert('outlined')}
            color="secondary"
          >
            Secondary
          </Button>
          <Button type="outlined" disabled onClick={() => alert('outlined')}>
            Default Disabled
          </Button>
        </div>
      </div>

      <div
        style={{
          padding: '16px',
        }}
      >
        <h2>Button Texted</h2>
        <div>
          <Button type="texted">123</Button>
          <Button type="texted" color="primary">
            123
          </Button>
          <Button type="texted" color="secondary">
            123
          </Button>
        </div>
      </div>
    </div>
  );
};

export { ButtonContainer };
export default ButtonContainer;
