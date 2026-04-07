import BaseGraph from '../deGraph/BaseGraph.ts';
import BaseShape from '../deGraph/BaseShape.ts';
const decorators = BaseShape.useDecorators();

@decorators
class A extends BaseGraph { }
console.log(A.shapes)

