import Vue, { CreateElement } from "vue";
import {Component, Prop} from "vue-property-decorator";

@Component
export class ChildComponent extends Vue {

    @Prop( { required: false, default: 'No message provided' })
    message: string

    @Prop({ required: false })
    value: number

    render (h: CreateElement) {
        console.log('render')
        return <div>Message: {this.message}, value: {this.value}</div>
    }
}
