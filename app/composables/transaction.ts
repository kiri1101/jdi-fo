export const useTransaction = () => {
  const label = (status: string) => {
    let output
    switch (status.toLowerCase()) {
      case 't':
        output = {
          en: 'Paid',
          fr: 'Payer',
        }
        break
      case 'c':
        output = {
          en: 'Canceled',
          fr: 'Annuler',
        }
        break
      case 'e':
        output = {
          en: 'Pending',
          fr: 'En cours',
        }
        break
      case 'x':
        output = {
          en: 'Expired',
          fr: 'Expirer',
        }
        break
      case 'o':
        output = {
          en: 'Operator error',
          fr: 'Erreur opérateur',
        }
        break

      default:
        output = {
          en: 'Pending',
          fr: 'En cours',
        }
        break
    }
    return output
  }

  const color = (status: string) => {
    let output
    switch (status.toLowerCase()) {
      case 't':
        output = 'success'
        break
      case 'c':
        output = 'danger'
        break
      case 'e':
        output = 'warn'
        break
      case 'x':
        output = 'info'
        break
      case 'o':
        output = 'secondary'
        break

      default:
        output = 'contrast'
        break
    }
    return output
  }

  const paymentMethod = (code: string) => {
    let output
    switch (code.toLowerCase()) {
      case 'orange-money':
        output = 'OM'
        break
      case 'mobile-money':
        output = 'MM'
        break
      case 'yoomee-money':
        output = 'YM'
        break
      case 'express-union':
        output = 'EU'
        break

      default:
        output = 'PM'
        break
    }
    return output
  }

  const invoiceStatus = (status: string) => {
    let output
    switch (status) {
      case 'unpaid':
        output = 'contrast'
        break
      case 'partial':
        output = 'info'
        break
      case 'paid':
        output = 'success'
        break
      case 'late':
        output = 'danger'
        break
      case 'cancelled':
        output = 'warn'
        break

      default:
        output = 'secondary'
        break
    }
    return output
  }

  return {
    label,
    color,
    paymentMethod,
    invoiceStatus,
  }
}
