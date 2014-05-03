<?php /* Smarty version Smarty-3.0.4, created on 2014-05-01 04:50:21
         compiled from "/Users/bylerj/Dev/Sites/colorfulcat/cms/modx/modx-2.2.14-pl/manager/templates/default/resource/update.tpl" */ ?>
<?php /*%%SmartyHeaderCode:10603077865361b66d425440-92166130%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '1b9260e83a2da6c745836aa79350be4655e58bd9' => 
    array (
      0 => '/Users/bylerj/Dev/Sites/colorfulcat/cms/modx/modx-2.2.14-pl/manager/templates/default/resource/update.tpl',
      1 => 1396557250,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '10603077865361b66d425440-92166130',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
)); /*/%%SmartyHeaderCode%%*/?>
<?php if (!is_callable('smarty_modifier_escape')) include '/Users/bylerj/Dev/Sites/colorfulcat/cms/modx/modx-2.2.14-pl/core/model/smarty/plugins/modifier.escape.php';
?><div id="modx-panel-resource-div"></div>
<div id="modx-resource-tvs-div"><?php echo $_smarty_tpl->getVariable('tvOutput')->value;?>
</div>
<?php  $_smarty_tpl->tpl_vars['tv'] = new Smarty_Variable;
 $_from = $_smarty_tpl->getVariable('hidden')->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
if ($_smarty_tpl->_count($_from) > 0){
    foreach ($_from as $_smarty_tpl->tpl_vars['tv']->key => $_smarty_tpl->tpl_vars['tv']->value){
?>
    <input type="hidden" id="tvdef<?php echo $_smarty_tpl->getVariable('tv')->value->id;?>
" value="<?php echo smarty_modifier_escape($_smarty_tpl->getVariable('tv')->value->default_text);?>
" />
    <?php echo $_smarty_tpl->getVariable('tv')->value->get('formElement');?>

<?php }} ?>

<?php echo $_smarty_tpl->getVariable('onDocFormPrerender')->value;?>

<?php if ($_smarty_tpl->getVariable('resource')->value->richtext&&(isset($_smarty_tpl->getVariable('_config')->value['use_editor']) ? $_smarty_tpl->getVariable('_config')->value['use_editor'] : null)){?>
<?php echo $_smarty_tpl->getVariable('onRichTextEditorInit')->value;?>

<?php }?>
