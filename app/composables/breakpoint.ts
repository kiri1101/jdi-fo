import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export const useBreakpoint = () => {
  const breakpoints = useBreakpoints(breakpointsTailwind)

  const canShowBillModal = computed(() => breakpoints.isSmaller('md'))

  return { breakpoints, canShowBillModal }
}
