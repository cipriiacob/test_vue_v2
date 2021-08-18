import {Component} from "vue-property-decorator";
import Vue from "vue";
import {ChildComponent} from "@/views/child";

@Component
export class ParentComponent extends Vue {
    list: number[] = []

    addElement () {
        this.list.push(this.list.length)
    }
    render () {
        return <div>
            <div>Vue V2</div>
            {this.list.map(item => <ChildComponent value={item} />)}
            <button onclick={this.addElement}>Click to add</button>
        </div>
    }
}
