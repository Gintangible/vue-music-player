<template>
    <svg class="svg-icon" aria-hidden="true">
        <use :xlink:href="iconID" />
    </svg>
</template>

<script>
export default {
    name: 'SvgIcon',
    props: {
        iconName: {
            type: String,
            required: true
        },
        className: {
            type: String,
            default: ''
        }
    },
    computed: {
        iconID() {
            return `#icon-${this.iconName}`;
        }
    }
};
</script>
<style scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
