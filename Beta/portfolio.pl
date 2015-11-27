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

print $real_username;

my $dbh_random123164t = DBI->connect("DBI:mysql:database=ilankleiman;host=localhost", "$DB_SQL_username", "$DB_SQL_password",
{'RaiseError' => 1});

my $sth_random123164t = $dbh_random123164t->prepare("SELECT cash FROM users WHERE u_cookie = ? AND p_cookie = ?");
$sth_random123164t->execute($got_u_cookie, $got_p_cookie) or die "Couldn't execute statement: $DBI::errstr; stopped";

while(my($dbg_cash) = $sth_random123164t->fetchrow_array())
{
	print $dbg_cash;
}
$dbh_random123164t->disconnect();