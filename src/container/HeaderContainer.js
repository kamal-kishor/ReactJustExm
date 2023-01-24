import Header from '../components/Header'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  data: state.cardItems
})
const mapDispatchToProps = () => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
// export default Home;
