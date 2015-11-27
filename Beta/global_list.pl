#!/usr/bin/perl

use CGI::Carp qw( fatalsToBrowser );
use CGI;
use MIME::Base64;
use DBI;
use CGI::Cookie;

BEGIN 
{
	$cgi = new CGI;
	#$username = $cgi->param("username");
}
require "login/cookie_login.pl";

my $dbh_random123164t = DBI->connect("DBI:mysql:database=ilankleiman;host=localhost", "$DB_SQL_username", "$DB_SQL_password",
{'RaiseError' => 1});
# open/close market times would be a later possible patch - no point in plus minus b/c never any open/closing times
# add plus/minus based on server price 12 hour intervals (server day). 
my $sth_random123164t = $dbh_random123164t->prepare("SELECT symbol, name, price, buy, sell, last_12_price FROM stocks");
$sth_random123164t->execute() or die "Couldn't execute statement: $DBI::errstr; stopped";
	
	#print "{'stocks':[";
print "[ ";
while(my($dbg_symbol, $dgb_name, $dbg_price, $dbg_buy, $dbg_sell, $dbg_last_12_price) = $sth_random123164t->fetchrow_array())
{
	$dbg_price = sprintf "%.2f", $dbg_price;
	$dbg_last_12_price = sprintf "%.2f", $dbg_last_12_price;
	print qq{{"Symbol" : "$dbg_symbol", "Name" : "$dgb_name", "Price" : "$dbg_price", "Bought" : "$dbg_buy", "Sold" : "$dbg_sell", "Last_int_price" : "$dbg_last_12_price"}, };
}
$dbh_random123164t->disconnect();
	print '{"Symbol" : "0", "Name" : "0", "Price" : "0", "Bought" : "0", "Sold" : "0", "Last_int_price" : "0"}';
	#print "]}";
	print " ]";