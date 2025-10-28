import moment from 'moment'

export const useUtils = () => {
  const formatAmount = (amount: number) =>
    new Intl.NumberFormat('en-US').format(amount)

  const formatDate = (dateTz: string) =>
    moment.parseZone(dateTz).format('DD MMM, YYYY')

  const filterPayment = (status: string, payments: Array<any>) =>
    payments.filter(
      payment => payment.invoice.status === status.trim().toLowerCase()
    )

  return { formatAmount, formatDate, filterPayment }
}
