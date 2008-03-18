<?php

switch($_GET['step'])
{
	default:
		$dsp->NewContent(t('Gruppen verwalten'), t('Uebersicht'));
		include_once('modules/mastersearch2/class_mastersearch2.php');
		$ms2 = new mastersearch2('cashmgr');

		$ms2->query['from'] = "{$config["tables"]["cashmgr_group"]} AS g
								LEFT JOIN {$config['tables']['cashmgr_accounting']} AS a ON g.id = a.groupid";
		$ms2->query['default_order_by'] = 'actiontime DESC';
		$ms2->config['EntriesPerPage'] = 20;
		
		$ms2->AddResultField(t('Name'), 'g.caption');
		
		$ms2->AddIconField('edit', 'index.php?mod=cashmgr&action=managegroup&step=1&id=', t('Editieren'));
		$ms2->AddIconField('delete', 'index.php?mod=cashmgr&action=managegroup&step=2&id=', t('Löschen'));

		$ms2->PrintSearch('index.php?mod=cashmgr&action=managegroup', 'g.id');
		
		$dsp->AddSingleRow($dsp->FetchButton('index.php?mod=cashmgr&action=managegroup&step=1', 'add'));
		break;
		
	case 1:
		include_once('inc/classes/class_masterform.php');
		$mf = new masterform();

		$dsp->NewContent(t('Gruppe anlegen/ editieren '), t(''));

		$mf->AddField('Bezeichnung', 'caption');

		$mf->SendForm('index.php?mod=cashmgr&action=managegroup&step=1', 'cashmgr_group', 'id', $_GET['id']);
		break;
		
	case 2:
		$db->query("DELETE FROM {$config["tables"]["cashmgr_group"]} WHERE id = {$_GET['id']}");
		$func->confirmation('Erfolgreich gelöscht', 'index.php?mod=cashmgr&action=managegroup');
		break;
}
?>