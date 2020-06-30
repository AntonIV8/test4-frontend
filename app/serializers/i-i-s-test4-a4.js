import { Serializer as A4Serializer } from
  '../mixins/regenerated/serializers/i-i-s-test4-a4';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(A4Serializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
