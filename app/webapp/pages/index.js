function getUseful() {
  try {
    const t = require('../../../common/utils').useful;
    console.info('got it!');
    return t;
  } catch(e) {
    console.info(e)
    return () => 'the wrong useful';
  }
}

const Index = () => (
  <p>Hello {getUseful()()}.</p>
);

export default Index;