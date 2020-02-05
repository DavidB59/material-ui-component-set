(() => ({
  name: '@betty-blocks/default/Test',
  icon: 'ContainerIcon',
  type: 'TEST',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
      B.define('action', () => setToggle(v => !v));
    }, []);
    return (
      <div className={classes.root}>
        <span className={classes.content}>{toggle ? 'on' : 'off'}</span>
      </div>
    );
  })(),
  styles: B => t => {
    const style = new B.Styling(t);
    return {
      root: {
        boxSizing: 'border-box',
        display: 'flex',
        width: '8rem',
        height: '6rem',
        margin: '1rem',
        padding: '1rem',
        color: 'rgba(255, 255, 255, 1)',
        borderRadius: '0.125rem',
        justifyContent: 'center',
        alignItems: 'center',
        background: ({ options: { color } }) => style.getColor(color),
      },
      content: {
        display: 'inline-flex',
      },
    };
  },
}))();
