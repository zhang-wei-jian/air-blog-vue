import { Graph, Node, Registry } from '@antv/x6';
export declare type VueComponent = {
    template: string;
    data?: {
        [key: string]: any;
    };
    components?: {
        [key: string]: any;
    };
    computed?: {
        [key: string]: any;
    };
    methods?: {
        [key: string]: any;
    };
};
export declare type Definition = VueComponent | ((this: Graph, node: Node) => VueComponent);
export declare const registry: Registry.Registry<Definition, import("@antv/x6/lib/types").KeyValue<Definition>, never>;
declare module '@antv/x6/lib/graph/graph' {
    namespace Graph {
        let registerVueComponent: typeof registry.register;
        let unregisterVueComponent: typeof registry.unregister;
    }
}
