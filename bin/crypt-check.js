import program from 'commander'
import check from '../commands/check.js'
program
  .command('price')
  .description('Check price of coin')
  .option(
    '--coin <type>',
    'Add specific coin types in CSV formats',
    'KCS,MATIC,TRX,BTC,ETH,BNB,DOGE'
  )
  .option('--cur <currency>', 'Change the currency', 'USD')

  // Pass in cmd to access the above options in the price fn
  .action(cmd => check.price(cmd))

program.parse(process.argv)
