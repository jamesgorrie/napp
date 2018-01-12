function getUseful() {
  try {
    const t = require('../../../common/utils').useful;
    console.info('got it!'); // The client gets this
    return t;
  } catch(e) {
    console.info(e)
    return () => 'the wrong useful'; // the server gets this
  }
}

const Index = () => (
  <p>Hello {getUseful()()}.</p>
);

export default Index;