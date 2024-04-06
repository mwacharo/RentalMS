<x-mail::message>
# Invoice Details
Date Issued: {{ $invoice['issued_at'] }}

Hello {{ $invoice['tenant_name'] }},

An invoice has been created for your unit, number {{ $invoice['unit_number'] }}, in the property {{ $invoice['property_name'] }}.

Here are the details:

- Bills Summary: {{ $invoice['bills_summary'] }}
- Rent         : {{ $invoice['rent'] }}
@if($invoice['deposit_status'] == '0')
- Deposit      : {{ $invoice['deposit'] }}
@endif
- Total Amount : {{ $invoice['total_amount'] }}

Please pay this invoice by the due date of {{ $invoice['due_date'] }}.

You can easily make a payment by clicking on the following link: {{ $invoice['link'] }}.

Thank you,

{{ config('app.name') }}
</x-mail::message>
[2024-04-06 13:43:47] local.ERROR: Connection could not be established with host "sandbox.smtp.mailtrap.io:2525": stream_socket_client(): php_network_getaddresses: getaddrinfo for sandbox.smtp.mailtrap.io failed: Name or service not known {"exception":"[object] (Symfony\\Component\\Mailer\\Exception\\TransportException(code: 0): Connection could not be established with host \"sandbox.smtp.mailtrap.io:2525\": stream_socket_client(): php_network_getaddresses: getaddrinfo for sandbox.smtp.mailtrap.io failed: Name or service not known at /home/engineer/Desktop/RentalMS/vendor/symfony/mailer/Transport/Smtp/Stream/SocketStream.php:154)
[stacktrace]
#0 [internal function]: Symfony\\Component\\Mailer\\Transport\\Smtp\\Stream\\SocketStream->Symfony\\Component\\Mailer\\Transport\\Smtp\\Stream\\{closure}()
#1 /home/engineer/Desktop/RentalMS/vendor/symfony/mailer/Transport/Smtp/Stream/SocketStream.php(157): stream_socket_client()
#2 /home/engineer/Desktop/RentalMS/vendor/symfony/mailer/Transport/Smtp/SmtpTransport.php(275): Symfony\\Component\\Mailer\\Transport\\Smtp\\Stream\\SocketStream->initialize()
#3 /home/engineer/Desktop/RentalMS/vendor/symfony/mailer/Transport/Smtp/SmtpTransport.php(213): Symfony\\Component\\Mailer\\Transport\\Smtp\\SmtpTransport->start()
#4 /home/engineer/Desktop/RentalMS/vendor/symfony/mailer/Transport/AbstractTransport.php(69): Symfony\\Component\\Mailer\\Transport\\Smtp\\SmtpTransport->doSend()
#5 /home/engineer/Desktop/RentalMS/vendor/symfony/mailer/Transport/Smtp/SmtpTransport.php(137): Symfony\\Component\\Mailer\\Transport\\AbstractTransport->send()
#6 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Mail/Mailer.php(573): Symfony\\Component\\Mailer\\Transport\\Smtp\\SmtpTransport->send()
#7 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Mail/Mailer.php(335): Illuminate\\Mail\\Mailer->sendSymfonyMessage()
#8 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Mail/Mailable.php(205): Illuminate\\Mail\\Mailer->send()
#9 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Support/Traits/Localizable.php(19): Illuminate\\Mail\\Mailable->Illuminate\\Mail\\{closure}()
#10 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Mail/Mailable.php(198): Illuminate\\Mail\\Mailable->withLocale()
#11 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Mail/Mailer.php(357): Illuminate\\Mail\\Mailable->send()
#12 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Mail/Mailer.php(301): Illuminate\\Mail\\Mailer->sendMailable()
#13 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Mail/PendingMail.php(124): Illuminate\\Mail\\Mailer->send()
#14 /home/engineer/Desktop/RentalMS/app/Http/Controllers/ApiTenantController.php(277): Illuminate\\Mail\\PendingMail->send()
#15 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\ApiTenantController->tenantInvoice()
#16 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction()
#17 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Routing/Route.php(259): Illuminate\\Routing\\ControllerDispatcher->dispatch()
#18 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()
#19 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Routing/Router.php(806): Illuminate\\Routing\\Route->run()
#20 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(144): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}()
#21 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}()
#22 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(183): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle()
#23 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Routing/Middleware/ThrottleRequests.php(159): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}()
#24 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Routing/Middleware/ThrottleRequests.php(125): Illuminate\\Routing\\Middleware\\ThrottleRequests->handleRequest()
#25 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Routing/Middleware/ThrottleRequests.php(87): Illuminate\\Routing\\Middleware\\ThrottleRequests->handleRequestUsingNamedLimiter()
#26 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(183): Illuminate\\Routing\\Middleware\\ThrottleRequests->handle()
#27 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(119): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}()
#28 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Routing/Router.php(805): Illuminate\\Pipeline\\Pipeline->then()
#29 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Routing/Router.php(784): Illuminate\\Routing\\Router->runRouteWithinStack()
#30 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Routing/Router.php(748): Illuminate\\Routing\\Router->runRoute()
#31 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Routing/Router.php(737): Illuminate\\Routing\\Router->dispatchToRoute()
#32 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(200): Illuminate\\Routing\\Router->dispatch()
#33 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(144): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}()
#34 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}()
#35 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle()
#36 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(183): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle()
#37 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}()
#38 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle()
#39 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(183): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle()
#40 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}()
#41 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(183): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle()
#42 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(99): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}()
#43 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(183): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle()
#44 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Http/Middleware/HandleCors.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}()
#45 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(183): Illuminate\\Http\\Middleware\\HandleCors->handle()
#46 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Http/Middleware/TrustProxies.php(39): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}()
#47 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(183): Illuminate\\Http\\Middleware\\TrustProxies->handle()
#48 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(119): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}()
#49 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(175): Illuminate\\Pipeline\\Pipeline->then()
#50 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(144): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter()
#51 /home/engineer/Desktop/RentalMS/public/index.php(51): Illuminate\\Foundation\\Http\\Kernel->handle()
#52 /home/engineer/Desktop/RentalMS/vendor/laravel/framework/src/Illuminate/Foundation/resources/server.php(16): require_once('...')
#53 {main}
"} 
