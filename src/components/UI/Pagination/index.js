import PagesPagination from './Pagination';
import { connect } from 'react-redux';
import {onPagination} from 'redux/actions/shop';
import './pagination.scss';

const mapDispatchToProps = {
  onPagination
}

export default connect(null, mapDispatchToProps)(PagesPagination);